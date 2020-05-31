import React from 'react';
import { Button } from '@core/components';
import { PlayedTrack } from '../../namespace';

interface PlayedTrackInfoProps {
  trackInfo: PlayedTrack;
  deleteTrackHandler(playedTrack: PlayedTrack): void;
}

export const PlayedTrackInfo = ({
  trackInfo,
  deleteTrackHandler,
}: PlayedTrackInfoProps) => (
  <li>
    {trackInfo.artist} - {trackInfo.album} - {trackInfo.track}
    <Button text="X" clickHandler={() => deleteTrackHandler(trackInfo)} />
  </li>
);
