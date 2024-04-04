# Next.js Evento

Next.js Evento created with HtML, CSS, TypeScript and Next.js.

Created during React Tutorial
https://bytegrad.com/app/professional-react-and-nextjs/

![Screenshot](screenshot.png)

## Learnings

- Routing strategy (layout and pages files; dynamic routes e.g. with [slug]; Link component in Next.js)
- Import logo with Next.js image component
- Use accent color in Tailwind (config)
- Set metadata + favicon for the project
- Determine active path in url: usePathname()
- Server vs Client components
- use clsx()
- use Framer Motion with layoutid (layoutid is used to identify a motion element -> different divs with the same layoutid become the same div for Framer Motion and the difference will be animated)
- Handle form submit event
- Navigate to a route using useRouter() with .push('route-path')
- Create events page with styling
- Add reusable h1 component
- Add scrollbar styling
- Get params in page component
- Fetch events in a server component without useEffect
- Type Evento event in a lib/types.ts file
- Add EventsList component with an EventCard component
- Use EventCard component with flexbox tricks
- Add event date to the EventCard component
- Add hover effect to EventCard
- Add H1 reusability
- Use Tailwind Merge()
- Add utility function cn() -> replace twMerge() and clsx()
- Fetch events for the correct city
- Get event slug from url via page params
- Use Next.js Image component and design tricks (blurred background image), image sizes, quality and priority
- Add special file "loading.tsx" (rendered during loading of a component) for a loading indicator
- Showing skeleton cards
- Add EventsList Suspense - fetch data in a component and wrap it in suspense
- Data fetching wrapper component for EventsList to create a reusable EventsList component
- Data caching and revalidation in Next.js -> fetch API is modified and caches automatically fetch requests
- Display event name as title with generateMetadata function
- Build-in fetch memoization in Next.js

## Install clsx()

```bash
npm install clsx
```

## Install FramerMotion

```bash
npm install framer-motion@10.16.4
```

## Install tailwind-merge

```bash
npm install tailwind-merge@2.0.0
```

## Other Learnings

- Use types instead of interfaces -> describe primitive values (string, number, boolean) -> describe union types -> utility-types -> describe tupels -> extract type from something else
- cn() utility function for TailwindCSS
- use Tailwind Merge packge for TailwindCSS
- use one object and function to update multiple states:

```JS
const [form, setForm] = useState({
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	address: "",
	zipCode: ""
});

const handleChange = (e) => {
	setForm({
		...form,
		[e.target.name]: e.target.value
	});
};
```

- Derive information from state
- Components rerender when the state changes!
- Primitives vs. Non-primitives (objects / arrays)
- Use custom hooks
- Client vs server components
- Avoid using fetch API in useEffect
