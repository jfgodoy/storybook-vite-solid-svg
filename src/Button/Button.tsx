import {For} from "solid-js"
import CircleIcon from "./circle.svg?component"

export namespace Button{
	export interface Props{
		count: number
	}
}

export function Button({count}:Button.Props){
	const labels = Array(count).fill(null).map((_, i) => (i + 1))

	return (
		<For each={labels}>{(label) => (
			<button>
				{label}
				<CircleIcon />
			</button>
		)}</For>
	)
}
