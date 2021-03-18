/*

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

/*

	LIFO(Last In First Out) Stack Data Structure

*/

const Stack = function (options) {
	this.options = options;

	this.initialSize = options?.initialSize || 100;

	this.length = this.initialSize;
	this.stack = new Array(this.length);
	this.ptr = -1;

	if (Array.isArray(options?.data)) {
		this.constructStack(options.data, options.constructReverse);
	}

	delete this.options?.data;
};

Stack.prototype.constructStack = function (data, constructReverse) {
	const len = data.length;

	if (!constructReverse) {
		for (let i = 0; i < len; i++) {
			this.push(data[i]);
		}
	} else {
		for (let i = len - 1; i >= 0; i--) {
			this.push(data[i]);
		}
	}
};

Stack.prototype.push = function (data) {
	if (data === null || data === undefined) {
		return false;
	}
	if (this.ptr === this.length - 1) {
		this.resize();
	}
	this.stack[++this.ptr] = data;

	return this.ptr + 1;
};

Stack.prototype.pop = function () {
	if (this.ptr >= 0) {
		const top = this.stack[this.ptr];
		this.ptr--;
		return top;
	}
	// or return undefined
};

Stack.prototype.resize = function () {
	const oldlen = this.length;
	const oldStack = this.stack;
	this.length = this.length * 2;
	this.stack = new Array(this.length);

	for (let i = 0; i < oldlen; i++) {
		this.stack[i] = oldStack[i];
	}
};

Stack.prototype.isEmpty = function () {
	if (this.ptr < 0) {
		return true;
	}
	return false;
};

Stack.prototype.peek = function () {
	if (this.ptr >= 0) {
		return this.stack[this.ptr];
	}
	// or return undefined
};

Stack.prototype.getData = function () {
	const arr = new Array(this.ptr + 1);
	for (let i = 0; i <= this.ptr; i++) {
		arr[i] = this.stack[i];
	}
	return arr;
};

Stack.prototype.setData = function (data) {
	this.empty();
	this.constructStack(data, this.options?.constructReverse);
};

Stack.prototype.getSize = function () {
	return this.ptr + 1;
};

Stack.prototype.empty = function () {
	this.ptr = -1;
};

Stack.prototype.wipe = function () {
	this.length = this.initialSize;
	this.stack = new Array(this.length);
	this.ptr = -1;
};

export default Stack;
