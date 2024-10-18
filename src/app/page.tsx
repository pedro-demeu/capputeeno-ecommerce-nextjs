import FeedPagination from "./components/common/FeedPagination";
import OrderBy from "./components/common/OrderBy";
import TabFilters from "./components/common/TabFilters";
import HeaderBar from "./components/layout/HeaderBar";

export default function Home() {
  return (
    <div>
      <HeaderBar />

      <div className="w-9/12 mx-auto">
        <section id="FiltersSection" className="flex justify-between">
          <TabFilters />
          <OrderBy />
        </section>

        <div className="flex justify-end">
          <FeedPagination />
        </div>
      </div>
    </div>
  );
}
