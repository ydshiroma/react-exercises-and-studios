export default function HobbyLinks() {
    let hobbyLinks = ["http://libgen.rs/", "https://www.chess.com/"];
    return (
        <div>
            <h1>Hobby Links</h1>
            <ol>
                <li><a href={hobbyLinks[0]}>LibGen</a></li>
                <li><a href={hobbyLinks[1]}>chess.com</a></li>
            </ol>
        </div>
    );
}