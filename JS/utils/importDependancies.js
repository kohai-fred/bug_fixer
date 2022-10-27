export function importDependancies(myDep) {
    const dependancies = JSON.parse(
        JSON.stringify(`
	<link rel='stylesheet' type='text/css' href='https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css' />
	<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' />
	<link
		href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'
		rel='stylesheet'
		integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi'
		crossorigin='anonymous'
		defer
	/>
	<script
		src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js'
		integrity='sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3'
		crossorigin='anonymous'
		defer
	></script>
	<script
		src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js'
		integrity='sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk'
		crossorigin='anonymous'
		defer
	></script>
	<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/toastify-js'></script>
	<script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js' defer></script>
	${myDep}
	`)
    );
    console.log("dependancies", dependancies);
    return dependancies;
}
