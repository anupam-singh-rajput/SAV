import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import useSound from 'use-sound'
import sound1 from './sounds/sound1.wav'
import sound2 from './sounds/sound2.wav'
import Button from './assets/Button'
import Dropdown from './assets/Dropdown'
import Slider from './assets/Slider'
import Toggle from './assets/Toggle'
import './styles/visualizer.css'

const ARRAYSIZE = 12
let condition = true

const Visualizer = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState('bubbleSort')
  const [animationSpeed, setAnimationSpeed] = useState(300)
  const [soundOn, setSoundOn] = useState(true)
  const [disableOptions, setDisableOptions] = useState(false)
  const [playBeep1] = useSound(sound1, { volume: soundOn ? 0.15 : 0 })
  const [playBeep2] = useSound(sound2, { volume: soundOn ? 0.05 : 0 })

  //For Bubble Sort
  const [debug, setDebug] = useState("");
  const [debug1, setDebug1] = useState("");
  const [debug2, setDebug2] = useState("");
  const [debug3, setDebug3] = useState("");
  const [debug4, setDebug4] = useState("");

  
  //For Selection Sort
  const [sebug, setSebug] = useState("");
  const [sebug1, setSebug1] = useState("");
  const [sebug2, setSebug2] = useState("");
  const [sebug3, setSebug3] = useState("");
  const [sebug4, setSebug4] = useState("");

  
  //For Insertion Sort
  const [iebug, setIebug] = useState("");
  const [iebug1, setIebug1] = useState("");
  const [iebug2, setIebug2] = useState("");
  const [iebug3, setIebug3] = useState("");
  const [iebug4, setIebug4] = useState("");

  //For heap Sort
  const [hebug, setHebug] = useState("");
  const [hebug1, setHebug1] = useState("");
  const [hebug2, setHebug2] = useState("");
  const [hebug3, setHebug3] = useState("");
  const [hebug4, setHebug4] = useState("");
  const [hebug5, setHebug5] = useState("");
  const [hebug6, setHebug6] = useState("");

  
  //For merge Sort
  const [mebug, setMebug] = useState("");
  const [mebug1, setMebug1] = useState("");
  const [mebug2, setMebug2] = useState("");
  const [mebug3, setMebug3] = useState("");
  const [mebug4, setMebug4] = useState("");
  const [mebug5, setMebug5] = useState("");
  const [mebug6, setMebug6] = useState("");

  
  //For quick Sort
  const [qebug, setQebug] = useState("");
  const [qebug1, setQebug1] = useState("");
  const [qebug2, setQebug2] = useState("");
  const [qebug3, setQebug3] = useState("");
  const [qebug4, setQebug4] = useState("");
  const [qebug5, setQebug5] = useState("");
  const [qebug6, setQebug6] = useState("");
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.input.value;
    setPrimaryArray(input.split(',').map(num => parseInt(num)));
  }

  const randomizeArray = () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = '#ff7f50'
    }
    let array = []
    for (let i = 0; i < ARRAYSIZE; i++) {
      array.push(randomVals(20, 400))
    }

    setPrimaryArray(array)
  }

  const randomVals = (min, max) => {
    let randomVal = Math.floor(Math.random() * (max - min + 1) + min)
    return randomVal
  }

  useEffect(() => {
    randomizeArray()
  }, [])

  const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
  }

  const finishedAnimation = async () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = 'green'
      playBeep1()
      await sleep(animationSpeed)
    }
    setDisableOptions(false)
  }

  const handleSorting = () => {
    setDisableOptions(true)
    switch (algorithm) {
      case 'bubbleSort':
        bubbleSort();
        // <BubbleSort primaryArray={primaryArray} setAlgorithm={setAlgorithm} setPrimaryArray={setPrimaryArray} sleep={sleep} animationSpeed={animationSpeed} playBeep1={playBeep1} playBeep2={playBeep2} finishedAnimation={finishedAnimation}/>;
        break
      case 'selectionSort':
        selectionSort()
        break
      case 'insertionSort':
        insertionSort()
        break
      case 'mergeSort':
        mergeSort()
        break
      case 'quickSort':
        quickSort()
        break
      case 'heapSort':
        heapSort()
        break
      default:
        break
    }
  }

  // ------------ ALGORITHMS ------------ //


  // Bubble Sort
  const bubbleSort = async () => {
    let currentArr = primaryArray
    let sorted = false
    console.log(currentArr)
    setAlgorithm({ name: 'Bubble Sort', timeComplexity: 'O(n^2)', Hvalue: currentArr.length*currentArr.length})

    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {

        const loopExpr = `for (let i=${i} ; ${currentArr.length} - 1 ; ${i}++)`;
        setDebug(loopExpr);
        console.log(loopExpr);

        // console.log(  "for (let i="+i+" ; "+currentArr.length+" - 1"+" ; "+i+""+"++)")
        for (let j = 0; j < currentArr.length - i - 1; j++) {

          const loopExpr1 = `for (let j=${j} ; ${currentArr.length} - ${i} - 1 ; ${j}++)`;
          setDebug1(loopExpr1);
          console.log(loopExpr1);


          // console.log(  "for (let j="+j+" ; "+currentArr.length+" - "+i+" - 1"+"  ; "+j+""+"++)")
          if (currentArr[j] > currentArr[j + 1]) {

            const loopExpr2 = `if (currentArr[${currentArr[j]}] > currentArr[${currentArr[j + 1]}] )`;
            setDebug2(loopExpr2);
            console.log(loopExpr2);


            // console.log("if (currentArr["+currentArr[j]+"]"+">"+ "currentArr"+currentArr[j + 1]+"] )")
            let temp = currentArr[j]
            currentArr[j] = currentArr[j + 1]
            currentArr[j + 1] = temp
            setDebug3("Swaping Value");
            // console.log("Swaping value");
            setPrimaryArray([...primaryArray])

            let bar1 = document.getElementById(j).style
            let bar2 = document.getElementById(j + 1).style
            bar1.backgroundColor = '#DC143C'
            bar2.backgroundColor = '#6A5ACD'

            await sleep(animationSpeed)

            bar1.backgroundColor = '#FF7F50'
            bar2.backgroundColor = '#FF7F50'

            sorted = false
            playBeep1()
          }
        }
        playBeep2()
      }
      setDebug4("Finishing Sorting")
      if (sorted) finishedAnimation()
    }
  }

  // Selection Sort
  const selectionSort = async () => {
    let currentArr = primaryArray
    let sorted = false
    setAlgorithm({ name: 'Selection Sort', timeComplexity: 'O(n^2)', Hvalue: currentArr.length*currentArr.length })

    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
        const sloopExpr = `for (let i=${i} ; ${currentArr.length} - 1 ; ${i}++)`;
        setSebug(sloopExpr);
        console.log(sloopExpr);

        for (let j = i + 1; j < currentArr.length; j++) {
          const sloopExpr1 = `for (let j=${j} ; j < ${currentArr.length}; ${j}++)`;
          setSebug1(sloopExpr1);
          console.log(sloopExpr1);

          if (currentArr[i] > currentArr[j]) {            
            const sloopExpr2 = `if (currentArr[${currentArr[j]}] > currentArr[${currentArr[j + 1]}] )`;
            setSebug2(sloopExpr2);
            console.log(sloopExpr2);

            let swap1 = currentArr[i]
            let swap2 = currentArr[j]
            currentArr[i] = swap2
            currentArr[j] = swap1
            setSebug3("Swaping Value");
            setPrimaryArray([...primaryArray])

            let bar1 = document.getElementById(i).style
            let bar2 = document.getElementById(j).style
            bar1.backgroundColor = '#DC143C'
            bar2.backgroundColor = '#6A5ACD'

            await sleep(animationSpeed)

            bar1.backgroundColor = '#FF7F50'
            bar2.backgroundColor = '#FF7F50'

            sorted = false
            playBeep1()
          }
        }
        playBeep2()
      }
      setSebug4("Finishing Sorting")
      if (sorted) finishedAnimation()
    }
  }

  // Insertion Sort
  const insertionSort = async () => {
    let currentArr = primaryArray
    let sorted = false
    setAlgorithm({ name: 'Insertion Sort', timeComplexity: 'O(n^2)',Hvalue: currentArr.length*currentArr.length })

    while (!sorted) {
      sorted = true

      for (let i = 1; i < currentArr.length; i++) {
        const iloopExpr = `for (let i=${i} ; i=${i} < ${currentArr.length} ; ${i}++)`;
        setIebug(iloopExpr);
        console.log(iloopExpr);

        let current = currentArr[i]
        let j = i - 1
        while (j >= 0 && currentArr[j] > current) {
          const iloopExpr1 = `while ( j(${j}) >= 0 && currentArrj[${currentArr[j]}] > currentArri[${currentArr[i]}] )`;
          setIebug1(iloopExpr1);
          console.log(iloopExpr1);

          currentArr[j + 1] = currentArr[j]
          const iloopExpr2 = `currentArr[j + 1] i.e ${currentArr[j + 1]} = currentArr[j] i.e ${currentArr[j]}`;
          setIebug2(iloopExpr2);
          console.log(iloopExpr2);

          setPrimaryArray([...primaryArray])

          let bar1 = document.getElementById(j + 1).style
          let bar2 = document.getElementById(j).style
          bar1.backgroundColor = '#DC143C'
          bar2.backgroundColor = '#6A5ACD'

          await sleep(animationSpeed)

          bar1.backgroundColor = '#FF7F50'
          bar2.backgroundColor = '#FF7F50'

          j--
          sorted = false
          playBeep1()
        }
        currentArr[j + 1] = current
        setPrimaryArray([...primaryArray])
        playBeep2()
      }
      setIebug3("Finished Sorting")
      if (sorted) finishedAnimation()
    }
  }

  // Merge Sort
  const mergeSort = async () => {
    let currentArr = primaryArray
    let hvalue = Math.ceil(currentArr.length*Math.log(currentArr.length));
    setAlgorithm({ name: 'Merge Sort', timeComplexity: 'O(n log(n))' , Hvalue:hvalue })

    await sort(currentArr, 0, currentArr.length - 1)
    finishedAnimation()
  }

  const sort = async (arr, low, high) => {

    const mloopExpr = `const sort = async (arr, low=${low}, high=${high}) => {`;
    setMebug(mloopExpr);
    console.log(mloopExpr);

    if (low < high) {
      let mid = Math.floor((low + high) / 2)

      await sort(arr, low, mid)
      await sort(arr, mid + 1, high)
      await merge(arr, low, mid, high)
    }
  }

  const merge = async (arr, low, mid, high) => {
    let i = low
    let j = mid + 1
    let k = 0
    let tempArr = []

    
    const mloopExpr1 = `while (i(${i}) <= mid(${mid}) && j(${j}) <= high(${high}) ) {`;
    setMebug1(mloopExpr1);
    console.log(mloopExpr1);

    while (i <= mid && j <= high) {

      
      const mloopExpr2 = `if (${arr[i]} < ${arr[j]}){`;
      setMebug2(mloopExpr2);
      console.log(mloopExpr2);
      if (arr[i] < arr[j]) {

        tempArr[k] = arr[i]
        i++
        k++
      const mloopExpr3 = `tempArr[k] = ${arr[i]} , i(${i})++ k(${k})++}`;
      setMebug3(mloopExpr3);
      console.log(mloopExpr3);

      } else {
        tempArr[k] = arr[j]
        j++
        k++
      const mloopExpr4 = `else { tempArr[k] = ${arr[j]} , j(${j})++ k(${k})++}`;
      setMebug4(mloopExpr4);
      console.log(mloopExpr4);
      }
      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'

      playBeep1()
    }

    while (i <= mid) {
      tempArr[k] = arr[i]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'

      playBeep1()

      i++
      k++
    }

    while (j <= high) {
      tempArr[k] = arr[j]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '# '
      bar2.backgroundColor = '#FF7F50'

      playBeep1()

      j++
      k++
    }

    for (let i = low; i <= high; i++) {
      arr[i] = tempArr[i - low]
      setPrimaryArray([...primaryArray]) 
      //arr removed from above setPrimaryArray([...primaryArray,arr])
      playBeep2()
    }
  }

  // Quick Sort
  const quickSort = async () => {
    let currentArr = primaryArray
    
    let hvalue = Math.ceil(currentArr.length*Math.log(currentArr.length))
    setAlgorithm({ name: 'Quick Sort', timeComplexity: 'O(n log(n))', Hvalue: hvalue })

    await sorts(currentArr, 0, currentArr.length - 1)
    finishedAnimation()
  }

  const sorts = async (arr, left, right) => {
    
      const qloopExpr = `const sorts = async (arr, left(${left}), right(${right})) => {`;
      setQebug(qloopExpr);
      console.log(qloopExpr);

    if (left < right) {
      const qloopExpr1 = `if (left(${left}) < right(${right})) {`;
      setQebug1(qloopExpr1);
      console.log(qloopExpr1);

      let partitionIndex = partition(arr, left, right)


      setPrimaryArray([...primaryArray])
      //arr removed from above setPrimaryArray([...primaryArray,arr])

      await sleep(animationSpeed)
      playBeep2()
      await sorts(arr, left, partitionIndex - 1)
      await sorts(arr, partitionIndex + 1, right)
    }
  }

  const partition = (arr, left, right) => {
      
    let pivot = arr[right]
    let i = left - 1
    playBeep1()
    for (let j = left; j < right; j++) {
      const qloopExpr2 = `for (let ${j} = ${left}; ${j} < ${right}; ${j}++) {`;
      setQebug2(qloopExpr2);
      console.log(qloopExpr2);

      if (arr[j] < pivot) {
      const qloopExpr3 = `if (${arr[j]} < ${pivot}) {`;
      setQebug3(qloopExpr3);
      console.log(qloopExpr3);

        i++
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      const qloopExpr4 = `${i}++ and swap the value `;
      setQebug4(qloopExpr4);
      console.log(qloopExpr4);


        let bar1 = document.getElementById(i).style
        let bar2 = document.getElementById(j).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'

        setTimeout(() => {
          bar1.backgroundColor = '#ff7f50'
          bar2.backgroundColor = '#ff7f50'
        }, 200)

        setPrimaryArray([...primaryArray, arr])
      }
    }

    let temp = arr[i + 1]
    arr[i + 1] = arr[right]
    arr[right] = temp

    return i + 1
  }

  // Heap Sort
  const heapSort = async () => {
    let arr = primaryArray
    let length = arr.length
    let index = Math.floor(length / 2 - 1)
    let lastChild = length - 1
    let hvalue = Math.ceil(arr.length*Math.log(arr.length))
    setAlgorithm({ name: 'Heap Sort', timeComplexity: 'O(n log(n))', Hvalue: hvalue })

    while (index >= 0) {
      await heapify(arr, length, index)
      index--

      setPrimaryArray([...primaryArray, arr])

      if (index >= 0) {
        let bar1 = document.getElementById(index).style
        let bar2 = document.getElementById(index + 1).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'

        await sleep(animationSpeed)

        playBeep1()

        bar1.backgroundColor = '#FF7F50'
        bar2.backgroundColor = '#FF7F50'
      } else {
        await sleep(animationSpeed)
      }
    }

    while (lastChild >= 0) {
      let swap1 = arr[0]
      let swap2 = arr[lastChild]

      arr[0] = swap2
      arr[lastChild] = swap1
      await heapify(arr, lastChild, 0)
      lastChild--
      playBeep2()
        
      setPrimaryArray([...primaryArray])
      //arr removed from above setPrimaryArray([...primaryArray,arr])

      if (index >= 0) {
        let bar1 = document.getElementById(lastChild).style
        let bar2 = document.getElementById(0).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'

        bar1.backgroundColor = '#FF7F50'
        bar2.backgroundColor = '#FF7F50'
      } else {
        await sleep(animationSpeed)
      }
    }
    
    console.log("finished")
      setHebug6("Finished")
    finishedAnimation()
  }

  const heapify = async (arr, length, index) => {
    let largest = index
    let leftNode = index * 2 + 1
    let rightNode = leftNode + 1

    if (arr[leftNode] > arr[largest] && leftNode < length) {
      largest = leftNode

      const hloopExpr = `if (arr[${arr[leftNode]}] > arr[${arr[largest]}] &&  ${leftNode} < ${length} )`;
      setHebug(hloopExpr);
      console.log(hloopExpr);
      const hloopExpr1 = `largest = ${largest}`; 
      setHebug1(hloopExpr1);
    }

    if (arr[rightNode] > arr[largest] && rightNode < length) {
      largest = rightNode

      const hloopExpr2 = `if (arr[${arr[rightNode]}] > arr[${arr[largest]}] &&  ${rightNode} < ${length} )`;
      setHebug2(hloopExpr2);
      console.log(hloopExpr2);
      const hloopExpr3 = `largest = ${rightNode}`; 
      setHebug3(hloopExpr3);
    }

    if (largest !== index) {
      let swap1 = arr[index]
      let swap2 = arr[largest]
      arr[index] = swap2
      arr[largest] = swap1

      const hloopExpr4 = `if ([${largest} !== ${index} )`;
      setHebug4(hloopExpr4);
      console.log(hloopExpr4);
      const hloopExpr5 = `largest = ${arr[largest]}`; 
      setHebug5(hloopExpr5);
      

      let bar1 = document.getElementById(index).style
      let bar2 = document.getElementById(largest).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'

      playBeep1()

      await heapify(arr, length, largest)
    }

    return arr
  }

  return (
    <div>
      <div className='header'>
        <Button
          type='NEWARRAY'
          name='New Array'
          onClick={randomizeArray}
          disabled={disableOptions}
        />
        <Dropdown
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={disableOptions}
        />
        <Slider
          onChange={(e) => setAnimationSpeed(e.target.value)}
          disabled={disableOptions}
        />
        <Toggle
          context='Sound'
          defaultChecked={soundOn}
          soundState={soundOn ? 'On' : 'Off'}
          onChange={() => {
            setSoundOn(!soundOn)
          }}
          disabled={disableOptions}
        />
        <Button
          onClick={handleSorting}
          type='SORT'
          name='Sort'
          disabled={disableOptions}
        />
        <Link to="/Compare">
         <Button name="Compare">Compare</Button>
        </Link>
      </div>
      <div className="input" style={{display: 'flex',width: '100%', border:"1px solid black"}}>
          <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder='Enter a string of numbers separated by commas' name="input" style={{
                left:"0px",
                width: "297%",
                height: "30px",
                fontSize: "large",border:"1px solid black"}}/>
                <input type="submit" value="Generate Bars" style={{marginBottom:"10px",display:"block",width:"298%", height:"50px" ,textAlign:"center", fontSize:"large",background:"black",color:"white"}} />
        </div>
      </form>
      </div>
      <div className='sortingBars'>
        {primaryArray &&
          primaryArray.map((val, key) => {
            return (
              <div
                className='bars'
                id={key}
                key={key}
                style={{ height: val , width: "50px", border:"1px solid black"}}
              >{val}</div>
            )
          })}
      </div>

  <div className="Debug">
  {algorithm.name === 'Bubble Sort' ? (
    <>
      `if(){<div>
        <br /><br />
        <h2 style={{color:'darkblue'}}>{debug} 
        <br />
        {debug1}
        <br />
        {debug2}
        <br />
        {debug3}</h2>
        </div>}
      else{
        <div>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <h2 style={{color: 'green '}}>
        {debug4}
        </h2>
      </div>}`
    </>
      ) : algorithm.name === 'Heap Sort' ? (
        <>
          `if(){<div>
              <br />
              <h2 style={{color:'darkblue'}}>{hebug} 
              <br />
              {hebug1}
              <br />
              <br />
              {hebug2}
              <br />
              {hebug3}
              <br />
              <br />
              {hebug4}
              <br />
              {hebug5}
              </h2>
              </div>}
            else{
              <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <h1 style={{color: 'green '}}>
              {hebug6}
              </h1>
            </div>}`    
          </>
        ) : algorithm.name === 'Selection Sort' ? (
            <>
      `if(){<div>
        <br /><br />
        <h2 style={{color:'darkblue'}}>{sebug} 
        <br />
        {sebug1}
        <br />
        {sebug2}
        <br />
        {sebug3}</h2>
        </div>}
      else{
        <div>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <h2 style={{color: 'green '}}>
        {sebug4}
        </h2>
      </div>}`
    </>
      ) : algorithm.name === 'Insertion Sort' ? (
        <>
          `if(){<div>
            <br /><br />
            <h2 style={{color:'darkblue'}}>{iebug} 
            <br />
            {iebug1}
            <br />
            {iebug2}
            <br />
            </h2>
            </div>}
          else{
            <div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <h2 style={{color: 'green '}}>
            {iebug3}
            </h2>
          </div>}`
        </>
      ):  algorithm.name === 'Merge Sort' ? (
        <>
          `if(){<div>

            <h2 style={{color:'darkblue'}}>{mebug} 
            <br />
            {mebug1}
            <br />
            <br />
            {mebug2}
            <br />
            {mebug3}
            <br/>
            <br />
            {mebug4}
            <br />
            {mebug5}
            <br />
            </h2>
            </div>}
          else{
            <div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <h2 style={{color: 'green '}}>
            {iebug3}
            </h2>
          </div>}`
        </>
      ):  algorithm.name === 'Quick Sort' ? (
        <>
          `if(){<div>

            <h2 style={{color:'darkblue'}}>{qebug} 
            <br />
            {qebug1}
            <br />
            {qebug2}
            <br />
            {qebug3}
            <br/>
            <br />
            {qebug4}
            <br />
            {qebug5}
            <br />
            </h2>
            </div>}
          else{
            <div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <h2 style={{color: 'green '}}>
            {iebug3}
            </h2>
          </div>}`
        </>
      ): null}
  </div>


      {algorithm.name !== undefined && (
        <div className='algoInfo'>
          <div>Algorithm: {algorithm.name}</div>
          <div>Time Complexity: {algorithm.timeComplexity}</div>
          <div>No of Iterations: {algorithm.Hvalue}</div>
        </div>
      )}
    </div>
  )
}

export default Visualizer
{/* {condition && (
                  <div>
                    <br />
                    <h2 style={{ color: "darkblue" }}>
                      {debug}
                      <br />
                      {debug1}
                      <br />
                      {debug2}
                      <br />
                      {debug3}
                    </h2>
                  </div>
                )}
                {!condition && (
                  <div>
                    <br />
                    <h2 style={{ color: "green " }}>{debug4}</h2>
                  </div>
                )} */}
   