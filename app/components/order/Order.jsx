"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "United Arab Emirates",
    zipCode: "",
    paymentMethod: "stripe",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setError("No product selected");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/product/${productId}`);
        if (response.data.success) {
          setProduct(response.data.product);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (submitting) return;

    // Basic Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.country) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    try {
      const orderPayload = {
        items: [{ productId, quantity }],
        shippingAddress: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          address1: formData.address,
          postalCode: formData.zipCode,
        },
        billingAddress: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          address1: formData.address,
          postalCode: formData.zipCode,
        },
        paymentMethod: formData.paymentMethod,
      };

      const endpoint = formData.paymentMethod === "stripe"
        ? "/order/stripe/create-checkout"
        : "/order/tamara/create-checkout";

      const response = await api.post(endpoint, orderPayload);

      if (response.data.success) {
        toast.success("Order initiated! Redirecting to payment...");
        if (response.data.checkoutUrl) {
          window.location.href = response.data.checkoutUrl;
        } else {
          router.push(`/order-success?orderId=${response.data.order?._id || response.data.orderId}`);
        }
      } else {
        toast.error(response.data.message || "Failed to create order");
      }
    } catch (err) {
      console.error("Order error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "An error occurred while placing order");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
        <p className="text-gray-600">{error || "Product not found"}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  const subtotal = product.salePrice * quantity;
  const total = subtotal;

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl overflow-hidden">
      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left Column - Billing Address */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl lg:col-span-5">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-serif">
            Order Details
          </h2>

          <div className="space-y-4">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                Phone Number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+971 55 5XX XXXX"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                Delivery Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street address, building name, villa number..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                required
              />
            </div>

            {/* Country & State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="e.g. United Arab Emirates"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                  State / Emirate
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="e.g. Dubai"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                />
              </div>
            </div>

            {/* City & Zip Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter city..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5 pl-1">
                  Zip/ Post code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="Optional..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-base font-bold text-gray-900 mb-4">
                  Payment Method
                </h3>
                <div className="flex gap-4 items-center">

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="tamara"
                      checked={formData.paymentMethod === "tamara"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                    />
                    <div className="h-6 w-20 bg-[#ffeed9] flex items-center justify-center rounded px-2">
                      <span
                        className="font-bold text-[10px] uppercase tracking-wider"
                        style={{ color: "#fcb61a" }}
                      >
                        tamara
                      </span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="stripe"
                      checked={formData.paymentMethod === "stripe"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                    />
                    <div className="h-8 w-20 flex items-center justify-center">
                      <Image
                        src="/images/stripe.jpeg"
                        alt="stripe logo"
                        width={60}
                        height={24}
                        className="object-contain rounded-sm"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Your Order */}
        <div className="bg-gray-50 p-6 md:p-10 rounded-2xl h-fit lg:col-span-7">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Order</h2>

          {/* Product Card */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative mb-8">
            <button
              onClick={() => window.history.back()}
              className="absolute top-4 right-4 text-[#9B1111] hover:text-red-600"
            >
              <IoCloseCircleOutline size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2 relative">
                <Image
                  src={product.images?.[0]?.url || "/images/placeholder.png"}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {product.name}
                </h3>
                <div className="text-xl font-bold text-gray-900 mb-4">
                  AED {product.salePrice}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-600">
                    {product.features?.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                      Quantity
                    </span>
                    <div className="flex items-center border border-gray-200 rounded-md bg-white">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-3 py-1 text-gray-500 hover:text-black"
                      >
                        -
                      </button>
                      <span className="px-2 text-sm text-gray-700 font-medium whitespace-nowrap">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-3 py-1 text-gray-500 hover:text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Totals */}
          <div className="space-y-4 border-b border-gray-200 pb-8 mb-8">
            <div className="flex justify-between items-center text-gray-600">
              <span className="text-base text-gray-700">Subtotal</span>
              <span className="text-base font-medium text-gray-900">
                AED {subtotal.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-medium text-gray-900">Total</span>
            <span className="text-xl font-bold text-gray-900">AED {total.toLocaleString()}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-none text-sm font-medium hover:bg-gray-50 transition-colors min-w-[120px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              onClick={handlePlaceOrder}
              className={`px-8 py-3 bg-black text-white rounded-none text-sm font-medium hover:bg-gray-800 transition-colors min-w-[120px] ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {submitting ? 'Processing...' : 'Place Order'}
            </button>
          </div>
          <ToastContainer position="bottom-right" theme="dark" />
        </div>
      </form>
    </div>
  );
}

function Order() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    }>
      <OrderContent />
    </Suspense>
  );
}

export default Order;
