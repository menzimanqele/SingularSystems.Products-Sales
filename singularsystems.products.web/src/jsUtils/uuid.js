/**
 * The native URL.createObjectURL is generating an uuid. Take advantage of this.
 * @returns GUID
 */
export function uuid() {
	const url = URL.createObjectURL(new Blob());
	const [id] = url.toString().split('/').reverse();
	return id;
}