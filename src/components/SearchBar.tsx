'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { Search } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  cas: string;
};

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (value.trim()) {
        const { data } = await supabase
          .from('products')
          .select('id, name, cas')
          .or(`name.ilike.%${value}%,cas.ilike.%${value}%`)
          .limit(5);
        
        setProducts(data || []);
        setIsOpen(true);
      } else {
        setProducts([]);
        setIsOpen(false);
      }
    };

    const debounce = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(debounce);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductClick = (productId: string) => {
    window.location.href = `/products/${productId}`;
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by product name or CAS number..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0B1F3F] text-[#0B1F3F] text-base placeholder:text-sm md:placeholder:text-base"
        />
      </div>
      
      {isOpen && products.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <span className="text-[#0B1F3F] font-medium">{product.name}</span>
              <span className="text-gray-500 text-sm ml-2">({product.cas})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
