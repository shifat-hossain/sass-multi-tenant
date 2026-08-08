<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller as ApiController;
use App\Http\Resources\V1\User\UserResource;
use Illuminate\Http\Request;

class ProfileController extends ApiController
{
    public function index(Request $request) {
        return $this->sendSuccessResponse('Profile retrieved successfully', 200, new UserResource($request->user()));
    }
}
