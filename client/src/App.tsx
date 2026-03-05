import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BestWhiteningKits from "./pages/BestWhiteningKits";
import SensitiveTeeth from "./pages/SensitiveTeeth";
import LedVsStrips from "./pages/LedVsStrips";
import AtHomeVsInChair from "./pages/AtHomeVsInChair";
import IsWhiteningSafe from "./pages/IsWhiteningSafe";
import DentistRecommendations from "./pages/DentistRecommendations";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import EditorialPolicy from "./pages/EditorialPolicy";
import Methodology from "./pages/Methodology";
import Disclosure from "./pages/Disclosure";
import NotFound from "./pages/NotFound";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7]">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/best-whitening-kits" component={() => <Layout><BestWhiteningKits /></Layout>} />
      <Route path="/sensitive-teeth-whitening" component={() => <Layout><SensitiveTeeth /></Layout>} />
      <Route path="/led-vs-strips" component={() => <Layout><LedVsStrips /></Layout>} />
      <Route path="/at-home-vs-in-chair" component={() => <Layout><AtHomeVsInChair /></Layout>} />
      <Route path="/is-whitening-safe" component={() => <Layout><IsWhiteningSafe /></Layout>} />
      <Route path="/dentist-recommendations" component={() => <Layout><DentistRecommendations /></Layout>} />
      <Route path="/quiz" component={() => <Layout><Quiz /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
      <Route path="/editorial-policy" component={() => <Layout><EditorialPolicy /></Layout>} />
      <Route path="/methodology" component={() => <Layout><Methodology /></Layout>} />
      <Route path="/disclosure" component={() => <Layout><Disclosure /></Layout>} />
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
