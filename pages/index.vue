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
    image: "/Images/1.jpg",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/Images/2.jpg",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/Images/3.jpg",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/Images/4.jpg",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/Images/F.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
  {
    image: "/Images/F.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
    oldPrice: "AED 999.00",
  },
];
const newestProducts = [
  {
    image: "/Images/D.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
  },
  {
    image: "/Images/F.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
  },
  {
    image: "/Images/G.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
  },
  {
    image: "/Images/H.png",
    description: "Lorem ipsum dolor",
    price: "AED 899.00",
  },
];
</script>
