<template>
  <div>
    <HeroSlider />
    <JeeilrySection />
    <ProductSlider title="SPECIAl OFFERS" :products="products" />
    <Cta />
    <ProductSlider title="NEW ARRIVALS" :products="newestProducts" />
    <CTA
      link="/register"
      content="BECOME AMEMBER & GET 15% OFF"
      btnLabel="sign up for free"
    />
  </div>
</template>

<script setup>
import HeroSlider from "~/components/HeroSlider.vue";
import JeeilrySection from "~/components/JewilrySection.vue";
import ProductSlider from "~/components/ProductSlider.vue";
import Cta from "~/components/CTA.vue";
import CTA from "~/components/shared/CTA.vue";
const products = [
  {
    image: "/images/a.jpg",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/images/aa.jpg",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/images/aaa.jpg",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/images/aaaa.jpg",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/images/b.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/images/bb.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
];
const newestProducts = [
  {
    image: "/images/bbb.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
  },
  {
    image: "/images/bbbb.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
  },
  {
    image: "/images/b.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
  },
  {
    image: "/images/bb.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
  },
];
</script>
