import React from 'react';
import v1 from 'uuid/v1';
import { Track } from '../../namespace';
import { TrackInfo } from '../trackinfo/trackinfo';

interface TrackListProps {
  tracks: Track[];
}

export const TrackList = ({ tracks }: TrackListProps) => (
  <ul>
    {tracks.map((track: Track) => {
      return <TrackInfo trackInfo={track} key={v1()} />;
    })}
  </ul>
);
