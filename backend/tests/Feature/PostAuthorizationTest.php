<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Post;
use Laravel\Sanctum\Sanctum;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostAuthorizationTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function unauthenticated_user_cannot_create_a_post()
    {
        $response = $this->postJson('/api/posts', [
            'title' => 'Test',
            'description' => 'Testing',
            'status' => true,
        ]);

        $response->assertStatus(401);
    }

    /** @test */
    public function user_cannot_delete_another_users_post()
    {
        $user1 = User::factory()->create();

        $user2 = User::factory()->create();

        $post = Post::factory()->create([
            'user_id' => $user1->id,
        ]);

        Sanctum::actingAs($user2);

        $response = $this->deleteJson("/api/posts/{$post->id}");

        $response->assertStatus(403);
    }
}
