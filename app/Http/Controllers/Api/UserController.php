<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index()
    {
        $users = User::orderBy('created_at', 'desc')->get();

        return response()->json($users);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name'=> 'required',
            'email'=> 'required|email|unique:users',
            'password'=> 'required|min:6',
        ]);

        $user = new User();
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = bcrypt($request->get('password'));

        $user->save();

        return response()->json($user);
    }

    public function show($id) 
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function update($id, Request $request)
    {
        $user = User::find($id);
        $user->name = $request->get('name');        
        $user->email = $request->get('email'); 
        
        $user->update();

        return response()->json($user);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json("User deleted");
    }
}
