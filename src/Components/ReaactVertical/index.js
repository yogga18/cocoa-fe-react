import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Icons from './icons';

const ReactVertical = () => {
  const navigate = useNavigate();

  const goToAnotherPage = (params) => {
    navigate(params);
  };

  return (
    <div className='bg-white my-5'>
      <VerticalTimeline lineColor={'#6c757d'}>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#0077ff' }}
          contentArrowStyle={{ borderRight: '7px solid #0077ff' }}
          date='2014'
          iconStyle={{ background: '#0077ff', color: '#0077ff' }}
          icon={<Icons nameIcon='graphql' animationIcon='spin' />}
          iconOnClick={() => goToAnotherPage('/cocoa-2014')}
          onTimelineElementClick={() => goToAnotherPage('/cocoa-2014')}
        >
          <h3 className='vertical-timeline-element-title text-light'>
            Cocoa 2014
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#0099ff' }}
          contentArrowStyle={{ borderRight: '7px solid #0099ff' }}
          date='2015'
          iconStyle={{ background: '#0099ff', color: '#fff' }}
          icon={<Icons nameIcon='mongodb' animationIcon='tada' />}
          iconOnClick={() => goToAnotherPage('/cocoa-2015')}
          onTimelineElementClick={() => goToAnotherPage('/cocoa-2015')}
        >
          <h3 className='vertical-timeline-element-title text-light'>
            Cocoa 2015
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#0077ff' }}
          contentArrowStyle={{ borderRight: '7px solid #0077ff' }}
          date='2016'
          iconStyle={{ background: '#0077ff', color: '#0077ff' }}
          icon={<Icons nameIcon='podcast' animationIcon='flashing' />}
          iconOnClick={() => goToAnotherPage('/cocoa-2016')}
          onTimelineElementClick={() => goToAnotherPage('/cocoa-2016')}
        >
          <h3 className='vertical-timeline-element-title text-light'>
            Cocoa 2016
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#0099ff' }}
          contentArrowStyle={{ borderRight: '7px solid #0099ff' }}
          date='2017'
          iconStyle={{ background: '#0099ff', color: '#fff' }}
          icon={<Icons nameIcon='map-pin' animationIcon='tada' />}
          iconOnClick={() => goToAnotherPage('/cocoa-2017')}
          onTimelineElementClick={() => goToAnotherPage('/cocoa-2017')}
        >
          <h3 className='vertical-timeline-element-title text-light'>
            Cocoa 2017
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#0077ff' }}
          contentArrowStyle={{ borderRight: '7px solid #0077ff' }}
          date='2018'
          iconStyle={{ background: '#0077ff', color: '#0077ff' }}
          icon={<Icons nameIcon='brightness' animationIcon='spin' />}
          iconOnClick={() => goToAnotherPage('/cocoa-2018')}
          onTimelineElementClick={() => goToAnotherPage('/cocoa-2018')}
        >
          <h3 className='vertical-timeline-element-title text-light'>
            Cocoa 2018
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#0099ff' }}
          contentArrowStyle={{ borderRight: '7px solid #0099ff' }}
          date='2019'
          iconStyle={{ background: '#0099ff', color: '#fff' }}
          icon={<Icons nameIcon='award' animationIcon='tada' />}
          iconOnClick={() => goToAnotherPage('/cocoa-2019')}
          onTimelineElementClick={() => goToAnotherPage('/cocoa-2019')}
        >
          <h3 className='vertical-timeline-element-title text-light'>
            Cocoa 2019
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#0099ff' }}
          contentArrowStyle={{ borderRight: '7px solid #0099ff' }}
          date='2020'
          iconStyle={{ background: '#0099ff', color: '#fff' }}
          icon={<Icons nameIcon='star' animationIcon='spin' />}
          iconOnClick={() => goToAnotherPage('/cocoa-2020')}
          onTimelineElementClick={() => goToAnotherPage('/cocoa-2020')}
        >
          <h3 className='vertical-timeline-element-title text-light'>
            Cocoa 2020
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ReactVertical;
