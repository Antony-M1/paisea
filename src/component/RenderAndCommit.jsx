
const Image = () => {
    return (
      <img
        src="https://i.imgur.com/ZF6s192.jpg"
        alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
      />
    );
}


const RenderAndCommit = () => {
    return (
        <>
            <h1>Render and commit</h1>
            <Image />
            <Image />
            <Image />
        </>
    );
}


export default RenderAndCommit