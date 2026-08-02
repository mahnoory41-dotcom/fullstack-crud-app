<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display all posts
     */
    public function index()
    {
        $posts = Post::latest()->get();

        return response()->json([
            'success' => true,
            'message' => 'Posts fetched successfully',
            'data' => $posts
        ], 200);
    }

    /**
     * Store a newly created post
     */
    public function store(Request $request)
    {

          $validated = $request->validate([
            'title' => 'required|min:3',
            'description' => 'required',
            'status' => 'required|boolean'
          ]);
          $validated['user_id'] = request()->user()->id;

         $post = Post::create($validated);

          return response()->json([
            'success' => true,
            'message' => 'Post created successfully',
            'data' => $post
          ], 201);
    }

    /**
     * Display single post
     */
    public function show(Post $post)
    {
        return response()->json([
            'success' => true,
            'data' => $post
        ], 200);
    }

    /**
     * Not used in API
     */
    public function create()
    {
        //
    }

    /**
     * Not used in API
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update post
     */
    public function update(Request $request, Post $post)
    {
        if ($post->user_id !== auth()->id()) {

    return response()->json([
        'message' => 'Forbidden'
    ],403);

}
        $validated = $request->validate([
            'title' => 'required|min:3',
            'description' => 'required',
            'status' => 'required|boolean'
        ]);

        $post->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Post updated successfully',
            'data' => $post
        ], 200);
    }

    /**
     * Delete post
     */
    public function destroy(Post $post)
    {
        if ($post->user_id !== auth()->id()) {

    return response()->json([
        'message' => 'Forbidden'
    ],403);

}
        $post->delete();

        return response()->json([
            'success' => true,
            'message' => 'Post deleted successfully'
        ], 200);
    }
}
