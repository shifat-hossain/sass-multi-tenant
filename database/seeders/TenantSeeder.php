<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tenant;

class TenantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tenant1 = Tenant::firstOrCreate(['id' => 'foo']);
        if ($tenant1->wasRecentlyCreated) {
            $tenant1->domains()->create(['domain' => 'foo.localhost']);
        }

        $tenant2 = Tenant::firstOrCreate(['id' => 'bar']);
        if ($tenant2->wasRecentlyCreated) {
            $tenant2->domains()->create(['domain' => 'bar.localhost']);
        }
    }
}
