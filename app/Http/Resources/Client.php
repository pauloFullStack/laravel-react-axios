<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Client extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'tel' => $this->tel,
            'gender' => $this->Gender->name,
            'gender_id' => $this->gender_id,
            'age' => $this->age,
        ];
    }

    public function with($request)
    {

        return [
            'version' => '1.0.0',
            'autho_url' => url('https://paulorenatodev.com/')
        ];
    }
}
