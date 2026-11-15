import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * 应用根组件：单页布局，按 PRD 顺序组装各区块。
 * 页内锚点导航（Header）依赖各 section 的 id。
 */
export default function App() {
  return (
    <div id="top" className="min-h-dvh">
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
