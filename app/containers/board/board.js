import React, {Component} from 'react';
import Panel from 'components/panel/panel';
import Music from 'containers/music/music';
import CassettePlayer from 'components/cassette_player/cassette_player';
import styles from './styles.scss';

class Board extends Component {
  state = {
    width: 500
  }
  updateDimensions() {
    // var cassette_player = document.getElementById('cassette_player'),
    //   width = cassette_player.innerWidth,
    //   height = cassette_player.innerHeight;

    if(this.refs.cassettePlayer) {
      this.setState({width: this.refs.cassettePlayer.offsetWidth});
      // console.log(this.refs.cassettePlayer.offsetWidth);
    }
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div className="app-container" ref="cassetteBoard">
        <div className={styles.panel_playboard} ref="cassettePlayer">
          <CassettePlayer width={this.state.width} />
        </div>
        <div className={styles.panel_playlist}>
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
        </div>
      </div>
    );
  }
}

export default Board;
