<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;

abstract class Controller
{
    public function sendSuccessResponse($result = [], $message = '', $code = 200): JsonResponse
    {
        $response = [
            'success' => true,
            'message' => $message,
            'data'  => $result,
        ];

        return response()->json($response, $code);
    }

    public function sendErrorResponse($error = '', $code = 404, $errorMessages = []): JsonResponse
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];
        
        if (!empty($errorMessages)) {
            $response['errors'] = $errorMessages;
        }

        return response()->json($response, $code);
    }
}
