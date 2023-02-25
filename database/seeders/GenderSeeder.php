<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Gender;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Gender::firstOrCreate([
            'name' => 'f'
        ]);

        Gender::firstOrCreate([
            'name' => 'm'
        ]);

        Gender::firstOrCreate([
            'name' => 'o'
        ]);
    }
}
