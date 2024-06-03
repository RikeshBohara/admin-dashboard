import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import NewProduct from "./pages/management/NewProduct";
import ProductManagement from "./pages/management/ProductManagement";
import TransactionManagement from "./pages/management/TransactionManagement";
import BarCharts from "./pages/charts/BarCharts";
import PieCharts from "./pages/charts/PieCharts";
import LineCharts from "./pages/charts/LineCharts";
import Coupon from "./pages/apps/Coupon";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customer = lazy(() => import("./pages/Customer"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/admin/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/admin/product"
            element={<Products />}
          />
          <Route
            path="/admin/transaction"
            element={<Transaction />}
          />
          <Route
            path="/admin/customer"
            element={<Customer />}
          />

          {/* Charts */}
          <Route
            path="/admin/chart/bar"
            element={<BarCharts />}
          />
          <Route
            path="/admin/chart/pie"
            element={<PieCharts />}
          />
          <Route
            path="/admin/chart/line"
            element={<LineCharts />}
          />

          {/* Apps */}
          <Route
            path="/admin/app/coupon"
            element={<Coupon />}
          />

          {/* Management */}
          <Route
            path="/admin/product/new"
            element={<NewProduct />}
          />
          <Route
            path="/admin/product/:id"
            element={<ProductManagement />}
          />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          <Route
            path="/admin/t"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
