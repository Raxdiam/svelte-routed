<script lang="ts">
    import { Router, Route, Link } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";

    export let url = "";
</script>

<Router {url}>
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
    </nav>
    <div>
        <!-- <Route path="about" component={About} /> -->
        <Route path="about"><About /></Route>
        <Route path="/"><Home /></Route>
    </div>
</Router>

<style lang="scss">
</style>
