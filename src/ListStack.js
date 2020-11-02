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

function Stack(options) {
	this.maxSize = options.maxSize || null;

	this.length = 0;
	this.HEAD = null;

	if (options && Array.isArray(options.data)) {
		this.constructStack(options.data, options.constructReverse);
	}
}

Stack.prototype.constructor = Stack;

Stack.prototype.constructNode = function (d) {
	return {
		next: null,
		d: d,
	};
};

Stack.prototype.constructStack = function (data, constructReverse) {
	var len = data.length;
	var i;

	if (!constructReverse) {
		for (i = 0; i < len; i++) {
			this.push(data[i]);
		}
	} else {
		for (i = len - 1; i >= 0; i--) {
			this.push(data[i]);
		}
	}
};

Stack.prototype.push = function (d) {
	var node = this.constructNode(d);
	if (this.HEAD) {
		node.next = this.HEAD;
		this.HEAD = node;
	} else {
		this.HEAD = node;
	}
	return ++this.length;
};

Stack.prototype.pop = function () {
	if (this.HEAD) {
		var temp = this.HEAD;
		this.HEAD = this.HEAD.next;
		temp.next = null;
		this.length--;
		return temp.d;
	}
	// or return undefined
};

Stack.isEmpty = function () {
	if (this.HEAD) {
		return false;
	}
	return true;
};

Stack.prototype.peak = function () {
	return this.HEAD?.d;
};

Stack.prototype.getData = function () {
	var iter = this.HEAD;
	var arr = new Array(this.length);
	var count = 0;
	while (iter != null) {
		arr[count++] = iter.d;
		iter = iter.next;
	}

	return arr;
};

Stack.prototype.getSize = function () {
	return this.length;
};

Stack.prototype.empty = function () {
	this.HEAD = null;
};

export default Stack;
