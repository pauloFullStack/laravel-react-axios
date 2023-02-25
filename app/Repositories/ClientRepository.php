<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Models\Client;

class ClientRepository extends BaseRepository
{

    public function model()
    {
        return Client::class;
    }

    public function getAllClients($perPage = 5)
    {
        $query = $this->makeModel()->newQuery();
        return $query->orderBy('created_at', 'desc')->paginate($perPage);
    }
}
