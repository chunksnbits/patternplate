import {
	createContext as Context
} from 'vm';

export default (file, run, cache = {}) => {
	const sandbox = {
		module,
		console,
		exports: {},
		require(name) {
			const dependency = file.dependencies[name];
			if (dependency) {
				const result = cache[dependency.path] ||
					run(dependency, cache);
				cache[dependency.path] = result;
				return result;
			}
			return require(name);
		}
	};

	sandbox.global = sandbox;
	return new Context(sandbox);
};