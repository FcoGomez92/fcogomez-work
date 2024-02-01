type Props = {
	label: string;
};

export const ProjectTags: React.FC<Props> = ({label}) => {

	return (
		<span className='capitalize m-1 inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-3xl'>
      {label}
    </span>
	);
};

export const CardTag: React.FC<Props> = ({label}) => {

	return (
		<span className='capitalize absolute end-4 md:end-8 inline-flex animate-background-shine cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-2 py-1 text-xs font-normal text-slate-300 backdrop-blur-3xl'>
      {label}
    </span>
	);
};
