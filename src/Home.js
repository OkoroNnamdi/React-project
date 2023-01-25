const Home = () =>
{
    const handClick = (e) =>
    {
        console.log("Hello nnamdi henry", e)
    }
    const handClickagain = (name, e) =>
    {
        console.log('Hello' + " " + name, e.target)
    }
    return (
        <div ClassName="Home">
            <h2>Home page</h2>
            <button onClick={handClick}>Click me </button>
            <button onClick={(e) => handClickagain('Okoro', e)}> click me again</button>
        </div>
    );
}

export default Home;