function useToggle(initialOn = false) {
  const [on, setOn] = useState(initialOn);

  const toggle = () => setOn(!on);

  return { on, toggle };
}

export default useToggle;
