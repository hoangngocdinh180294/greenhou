<?php
namespace App\Tables\Builders\Admin;

use App\Models\Product;
use LaravelEnso\Tables\app\Services\Table;
// Log cass su dung de log info
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
class ProductTable extends Table
{
    protected $templatePath = __DIR__.'/../../Templates/Admin/products.json';

    public function query() {
        if(env('APP_DEBUG', false) == true) {
            Log::info("ProductTable Query");
        }
        return Product::join('product_types','products.product_type_id','=','product_types.id')
            ->select(
                'products.id as dtRowId',
                'products.name',
                'product_types.name as theloai',
                'products.status',
                'products.created_at'
            );
    }
}