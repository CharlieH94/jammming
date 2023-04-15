import "./Tracklist.css";
import Track from "../Track/Track";

const results = ['result1', 'result2', 'result3', 'result4', 'result5'];

const Tracklist = () => {
    return results.map(result => <Track track={result} />);
};

export default Tracklist;