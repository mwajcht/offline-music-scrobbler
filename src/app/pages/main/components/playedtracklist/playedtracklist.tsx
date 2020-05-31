import React from 'react';
import v1 from 'uuid/v1';
import { PlayedTrack } from '../../namespace';
import { PlayedTrackInfo } from '../playedtrackinfo/playedtrackinfo';

interface PlayedTrackListProps {
  title: string;
  tracks: PlayedTrack[];
  deleteTrackHandler(playedTrack: PlayedTrack): void;
}

export const PlayedTrackList = ({
  title,
  tracks,
  deleteTrackHandler,
}: PlayedTrackListProps) => (
  <div>
    <p>{title}</p>
    <ul>
      {tracks.map((track: PlayedTrack) => {
        return (
          <PlayedTrackInfo
            trackInfo={track}
            deleteTrackHandler={deleteTrackHandler}
            key={v1()}
          />
        );
      })}
    </ul>
  </div>
);
