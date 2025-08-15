<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = 'tasks';

    protected $fillable = [
        'title',
        'description',
        'completed',
        'finish_date',
        'user_id',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'completed' => 'boolean',
    ];
}
