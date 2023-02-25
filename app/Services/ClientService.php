<?php


namespace App\Services;

use App\Repositories\ClientRepository;
use App\Models\Client;

class ClientService
{
    /**
     * @var ClientRepository
     */
    protected $clientRepository;

    public function __construct(ClientRepository $clientRepository)
    {
        $this->clientRepository = $clientRepository;
    }

    public function store($request)
    {
        return $this->clientRepository->create($request->all());
    }

    public function all()
    {
        return $this->clientRepository->getAllClients();
    }

    public function update($data)
    {
        $client = $this->clientRepository->findOrFail($data->id);

        if ($client->update($data->all())) {
            return $client;
        }
    }

    public function show($id)
    {
        return $this->clientRepository->findOrFail($id);
    }

    public function delete($id)
    {
        $clientDelete = $this->clientRepository->findOrFail($id);
        if ($clientDelete->delete()) {
            return $clientDelete;
        }
    }
}
