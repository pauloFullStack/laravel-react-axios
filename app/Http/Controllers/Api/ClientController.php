<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\ClientService;
use App\Http\Controllers\Controller;
use App\Http\Resources\Client as ClientResource;

class ClientController extends Controller
{

    /**
     * @var ClientService
     */
    protected $clientService;


    public function __construct(ClientService $clientService)
    {
        $this->clientService = $clientService;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Return collection of articles as a resource
        return ClientResource::collection($this->clientService->all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Add Client
        return new ClientResource($this->clientService->store($request));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Return single article as a resource
        return new ClientResource($this->clientService->show($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        return new ClientResource($this->clientService->update($request));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Delete Client
        return new ClientResource($this->clientService->delete($id));
    }
}
