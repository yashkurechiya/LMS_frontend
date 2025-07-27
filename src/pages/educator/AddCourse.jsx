import React, { useEffect, useRef, useState } from 'react'
import uniqid from 'uniqid';
import Quill from 'quill';
import { assets } from '../../assets/assets';

const AddCourse = () => {

  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [image, setImage] = useState(null)
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [lectureDetails, setLectureDetails] = useState(
    {
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    }
  )

  const handleChapter = (action, chapterId) => {
    if(action == 'add') {
      const title = prompt('Enter Chapter Name:');
      if(title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder: chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === 'remove') {
      setChapters(chapters.filter((chapter)=> chapter.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapters(
        chapters.map((chapter)=>
        chapter.chapterId === chapterId ? { ...chapter, collapsed: !chapter.collapsed } : chapter)
      )
    }
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, [])


  return (
    <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <form className='flex flex-col gap-4 max-w-md w-full text-gray-500'>
        <div className='flex flex-col gap-1'>
          <p>Course Title</p>
          <input type="text" onChange={e => setCourseTitle(e.target.value)} value={courseTitle} placeholder='Type here'
            className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' required />
        </div>
        <div className='w-auto flex flex-col'>
          <p className='flex flex-col gap-1'>Course Description</p>
          <div ref={editorRef}></div>
        </div>

        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex flex-col gap-1'>

            <p>Course Price</p>
            <input type="number" onChange={e => setCoursePrice(e.target.value)} value={coursePrice}
              placeholder='0' className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500 ' required />
          </div>
          <div className='flex md:flex-row flex-col items-center gap-3'>
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className='flex items-center gap-3'>
              <img src={assets.file_upload_icon} className='p-3 bg-blue-500 rounded' alt="" />
              <input type="file" id='thumbnailImage' onChange={e => setImage(e.target.files[0])} accept='image.*' hidden />
              <img src={image ? URL.createObjectURL(image) : ''} className='max-h-10' alt="" />
            </label>
          </div>
        </div>
        <div>
          <p>Discount %</p>
          <input type="number" onChange={e => setDiscount(e.target.value)} value={discount} placeholder='0' min={0}
            max={100} className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500' required />
        </div>

        {/* Adding Chapters & Lectures */}
        <div>
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className='bg-white border rounded-lg mb-4'>
              <div className='flex justify-between items-center p-4 border-b'>
                <div className='flex items-center'>
                  <img src={assets.dropdown_icon} width={14} alt="" className={`mr-2 cursor-pointer transition-all ${chapter.collapsed && "-rotate-90"}`} />
                  <span>{chapterIndex + 1} {chapter.chapterTitle}</span>
                </div>
                <span className='text-gray-500'>{chapter.chapterContent.length} Lectures</span>
                <img src={assets.cross_icon} className='cursor-pointer' alt="" />
              </div>
              {!chapter.collapsed && (
                <div className='p-4'>
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div key={lectureIndex} className='flex justify-between items-center mb-2'>
                        <span>{lectureIndex + 1} {lecture.lectureTitle} - {lecture.lectureDuration} mins- <a href={lecture.lectureUrl} target='_blank'
                        className='text-blue-500'> Link </a> - {lecture.isPreviewFree ? 'FreePreview': 'Paid'} </span>
                        <img src={assets.cross_icon} className='cursor-pointer' alt="" />
                    </div>
                  ))}
                  <div>
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </form>

    </div>
  )
}

export default AddCourse
