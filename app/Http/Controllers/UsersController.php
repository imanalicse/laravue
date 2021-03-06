<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        return view('users.users');
    }

    public function create()
    {
        return view('users.create');
    }

    public function edit($id)
    {
        return view('users.edit', compact('id'));
    }
}
