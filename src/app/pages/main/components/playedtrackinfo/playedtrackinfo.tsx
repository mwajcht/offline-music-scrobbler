import React from 'react';
import { IconButton } from '@core/components/iconbutton/iconButton';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
    <IconButton
      text=""
      clickHandler={() => deleteTrackHandler(trackInfo)}
      icon={faTrash}
    />
  </li>
);
