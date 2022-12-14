import React from 'react'
import { Stack, Box } from '@mui/material'

import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Loading...'

  return (
    <Stack 
        direction={direction || 'row'} 
        flexWrap='wrap'
        justifyContent='start'
        gap={2}
    >
        {videos.map((video, idx) => (
            <Box key={idx}>
                {video.idx.videoId && <VideoCard video={video} />}
                {video.idx.channelId && <ChannelCard channel={video} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos