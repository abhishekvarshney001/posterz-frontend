import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import "./Home.scss";
import Product from '../../components/product/Product'
import {axiosClient} from "../../utils/axiosClient"
import { useState } from 'react';
import { useSelector } from "react-redux";

function Home() {

  const categories = useSelector((state) => state.categoryReducer.categories);
  const [topProducts, settopProducts] = useState(null);

  async function fetchData() {
   
    const categoryResponce = await axiosClient.get("/categories?populate=image");
    const topProductResponce = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true&populate=image"
    );

    // setCategories(categoryResponce.data.data)
    settopProducts(topProductResponce?.data?.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop by Categories</h2>
          <p className="subheading">
            Shop from the best, our Film and TV Poster collection
          </p>
        </div>
        <div className="content">
          {categories?.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop by Categories</h2>
          <p className="subheading">
            Shop from the best, our Film and TV Poster collection
          </p>
        </div>
        <div className="content">
          {topProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
