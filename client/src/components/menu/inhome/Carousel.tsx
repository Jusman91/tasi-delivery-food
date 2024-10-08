import { CardCarouselMenu } from '@/components/card';
import { IMenuListProps } from '@/types';
import { Carousel as CarouselAntd } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { forwardRef } from 'react';

const Carousel = forwardRef<CarouselRef, IMenuListProps>(
	({ data }, ref) => {
		return (
			<CarouselAntd
				ref={ref}
				className='center'
				speed={800}
				dots={false}
				infinite={true}
				slidesToShow={1}
				slidesToScroll={1}
				centerMode={true}
				initialSlide={0}
				centerPadding='22%'
				responsive={[
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 1,
							infinite: false,
							centerMode: false,
							initialSlide: 1,
						},
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							infinite: false,
							centerMode: false,
							initialSlide: 1,
							draggable: true,
						},
					},
				]}>
				{data.slice(0, 5).map((item, idx) => (
					<CardCarouselMenu
						key={idx}
						name={item.name}
						description={item.description}
						price={item.price}
						category={item.category}
						thumbnail={item.thumbnail}
						status={item.status}
						restaurant_id={item.restaurant_id}
					/>
				))}
			</CarouselAntd>
		);
	},
);

export default Carousel;
