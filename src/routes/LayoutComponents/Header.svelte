<script lang="ts">
    import Link from "./HeaderLink.svelte";

    let height: number;
</script>

<header class = "bg-background w-full border-b-2 border-b-accent-heavy fixed z-10" bind:offsetHeight={height}>
    <div class = "flex flex-col justify-center items-center h-full pt-6 pb-3">
        <a href = "/"><h1 class = "text-4xl font-mono font-medium"><span class = "text-accent-light">re</span>Course</h1></a>
        <nav class = "my-3 flex-row justify-center items-center">
            <Link href = "/course">Courses</Link>
            <Link href = "/prof">Professors</Link>
            <Link href = "/review">Reviews</Link>
        </nav>
    </div>
</header>
<div style:height = {`${height}px`}></div>