import React from 'react';
import { getReadableLength } from '@core/namespace';
import { Track } from '../../namespace';

interface TrackInfoProps {
  trackInfo: Track;
}

export const TrackInfo = ({ trackInfo }: TrackInfoProps) => (
  <li>
    {trackInfo.name} - {getReadableLength(trackInfo.duration)}
  </li>
);
