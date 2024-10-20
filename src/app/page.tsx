import FeedPagination from "./components/common/FeedPagination";
import OrderBy from "./components/common/OrderBy";
import TabFilters from "./components/common/TabFilters";
import HeaderBar from "./components/layout/HeaderBar";
import ProductListView from "./components/product/ProductListView";

export default async function Home() {

  return (
    <div className="bg-[#F3F5F6]">
      <HeaderBar />

      <div className="w-9/12 mx-auto">
        <section id="filters" className="flex justify-between mt-6">
          <TabFilters />
          <OrderBy />
        </section>

        <div className="flex justify-end">
          <FeedPagination />
        </div>

        <section
          id="feed"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        >
          <ProductListView />
        </section>

        <div className="flex justify-end mt-2 pb-10">
          <FeedPagination />
        </div>
      </div>
    </div>
  );
}
