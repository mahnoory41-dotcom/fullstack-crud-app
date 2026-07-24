<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function index()
{
    $posts = Post::all();

    return response()->json($posts);
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|min:3',
        'description' => 'required',
        'status' => 'required|boolean',
    ]);

    $post = Post::create($validated);

    return response()->json([
        'message' => 'Post created successfully',
        'data' => $post
    ], 201);
}

    /**
     * Display the specified resource.
     */
  public function show(Post $post)
{
    return response()->json($post);
}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, Post $post)
{
    $validated = $request->validate([
        'title'=>'required|min:3',
        'description'=>'required',
        'status'=>'required|boolean'
    ]);

    $post->update($validated);

    return response()->json([
        'message'=>'Post updated successfully',
        'data'=>$post
    ]);
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
{
    $post->delete();

    return response()->json([
        'message'=>'Post deleted successfully'
    ]);
}
}
