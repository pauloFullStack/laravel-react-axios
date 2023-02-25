<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'clients';

    protected $fillable = [
        'name',
        'tel',
        'gender_id',
        'age',
    ];


    protected $logAttributes = [
        'name',
        'tel',
        'gender_id',
        'age',
    ];


    protected $hidden = [];


    protected $dates = [
        'created_at',
        'updated_at'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Gender()
    {

        return $this->belongsTo(Gender::class, 'gender_id', 'id', 'Gender');
    }

}
