import HeroCarousel  from "@/components/HeroCarousel"
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
    <section className="px-6 md:px-20 py-24">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className="small-text">
          Say goodbye to buyer's remorse and hello to smarter shopping:
            {/* <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
            /> */}
          </p>
          <h1 className="head-text">
            Unleash the Power of
            <span className="text-primary"> The Oracle</span>
          </h1>
          <p className="mt-6">
          Simply search for any item, from electronics to fashion, and let us do the rest. Our cutting-edge technology scours the web to bring you the most up-to-date prices, ensuring you never miss a bargain again.
          </p>
          <Searchbar />
        </div>
        <HeroCarousel />
      </div>
    </section>

    <section className="trending-section">
      <h2 className="section-text">Trending</h2>

      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {allProducts?.map
        ((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
    </>
  )
}

export default Home
